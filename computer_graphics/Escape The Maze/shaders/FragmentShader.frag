precision mediump float;

const int NUM_LIGHTS = 26;

varying vec3 fakeNormal;
varying vec3 worldPos;
varying highp vec2 v_texcord;

uniform vec3 pointLoc[NUM_LIGHTS];
uniform sampler2D sampler;


void main(){
    // ambient light
    float AMBIENT_LIGHT = 0.8;

    // directional light from the moom
    vec3 moonLoc = vec3(60.0, 5.0, 60.0);
    vec3 lightDir = normalize(moonLoc - worldPos);
    float direc_light = dot(normalize(fakeNormal), lightDir);

    //point lights scattered throughout the environment
    float point_light = 0.0;
    for (int i = 0; i < NUM_LIGHTS; i += 1){
        vec3 surfaceLight = pointLoc[i] - worldPos;

        float dist = length(surfaceLight);
        float diff = dot(normalize(fakeNormal), normalize(surfaceLight));
        point_light += max(diff / dist, 0.0);
    }

    // add all the lights together
    float brightness = max(AMBIENT_LIGHT + direc_light + point_light, 0.0);

    vec4 tempColor = texture2D(sampler, v_texcord);
    gl_FragColor = vec4(tempColor.rgb * brightness, tempColor.a);


}