precision mediump float;

const int NUM_LIGHTS = 20;

varying vec3 fragColor;
varying vec3 fakeNormal;
varying vec3 worldPos;

uniform vec3 pointLoc[NUM_LIGHTS];
uniform vec3 spotLoc;

void main(){
    // ambient light
    float AMBIENT_LIGHT = 0.1;

    // directional light from the moom
    vec3 moonLoc = vec3(20.0, 5.0, 20.0);
    vec3 lightDir = normalize(moonLoc - worldPos);
    float direc_light = dot(normalize(fakeNormal), lightDir) * 0.55;

    // point lights scattered throughout the environment
    float point_light = 0.0;
    for (int i = 0; i < NUM_LIGHTS; i += 1){
        vec3 surfaceLight = pointLoc[i] - worldPos;
        point_light += dot(normalize(fakeNormal), normalize(surfaceLight))
                     * 1.0 / (length(surfaceLight));
    }

    // spot light
    vec3 surfaceLight = normalize(spotLoc - worldPos);
    float spot_light = dot(surfaceLight, vec3(0,1,0));
    float cutoff = cos(radians(10.0));

    if (spot_light >= cutoff){
        spot_light = pow((spot_light - cutoff) / (1.0 - cutoff), 32.0);
    } else{
        spot_light = 0.0;
    } 


    // prevent negative lights
    direc_light = max(0.0, direc_light);
    point_light = max(0.0, point_light);
    spot_light = max(0.0, spot_light * 2.0);


    // add all the lights together
    gl_FragColor = vec4(fragColor*(AMBIENT_LIGHT + direc_light + point_light + spot_light), 1.0);

}