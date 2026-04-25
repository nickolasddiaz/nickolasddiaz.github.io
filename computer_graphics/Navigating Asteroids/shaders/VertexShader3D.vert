// GLSL is the language used for shaders (GL Shader Language)
// Attribute - you specify how to pull the data out of the buffers you supply.
// Buffers - Data loaded onto the GPU (Normally vertex information)	
// Uniforms - global variables (in GLSL) that you set before you run the shader program	
// Textures - Textures are arrays of data you can randomly acces in your shader program.  
// Varying - are way for a vertex shader to pass data to the fragmentShader.
 
         
// 4x4 Matrix mapped to a 0-indexed 1D array of 16
//  0  1  2  3
//  4  5  6  7
//  8  9 10 11
// 12 13 14 15

// 4x4 Identity Matrix
// 1 0 0 0
// 0 1 0 0
// 0 0 1 0
// 0 0 0 1

precision mediump float;
attribute vec3 a_position;
attribute vec3 a_color;
varying vec3 fragColor;

uniform vec3 trans;
uniform vec3 rotate;
uniform vec3 scale;

uniform vec3 camerapos;
uniform vec3 camerarot;


vec4 TranslateObject(vec4 pos){
	// 4x4 Translate Function
	// 1 0 0 X
	// 0 1 0 Y
	// 0 0 1 Z
	// 0 0 0 1

	return mat4(
		1.0,      	0.0,       	0.0,    	0.0,
		0.0,     	1.0,       	0.0,      	0.0,
		0.0, 		0.0,      	1.0,       	0.0,
		trans.x, 	trans.y, 	trans.z, 	1.0
	) * pos;
}

vec4 ScaleObject(vec4 pos, vec4 scale){
	// 4x4 Scale Function
	// X 0 0 0
	// 0 Y 0 0
	// 0 0 Z 0
	// 0 0 0 1

	return mat4(
		scale.x, 	0.0,       	0.0,       	0.0,
		0.0,       	scale.y, 	0.0,       	0.0,
		0.0,       	0.0,       	scale.z, 	0.0,
		0.0,       0.0,       0.0,       1.0
	) * pos;
}

vec4 RotateObject(vec4 pos, vec3 u_rotation) {
    vec3 c = cos(u_rotation);
    vec3 s = sin(u_rotation);

	// 4x4 Rotate X
	// 1 0       0      0
	// 0 cos(A) -sin(A) 0
	// 0 sin(A)  cos(A) 0
	// 0 0       0      1

    mat4 rotateX = mat4(
        1.0, 0.0, 0.0, 0.0,
        0.0, c.x, s.x, 0.0,
        0.0, -s.x, c.x, 0.0,
        0.0, 0.0, 0.0, 1.0
    );

	// 4x4 Rotate Y
	// cos(A) 0 sin(A) 0
	// 0      1 0      0
	//-sin(A) 0 cos(A) 0
	// 0      0 0      1

    mat4 rotateY = mat4(
        c.y, 0.0, -s.y, 0.0,
        0.0, 1.0, 0.0, 0.0,
        s.y, 0.0, c.y, 0.0,
        0.0, 0.0, 0.0, 1.0
    );

	// 4x4 Rotate Z same as 2x2 matrix rotation
	// cos(A) -sin(A) 0 0
	// sin(A)  cos(A) 0 0
	// 0       0      1 0
	// 0       0      0 1

    mat4 rotateZ = mat4(
        c.z, s.z, 0.0, 0.0,
        -s.z, c.z, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0
    );

    return rotateX * rotateY * rotateZ * pos;
}


vec4 MoveCamera(vec4 pos, vec3 cameraLoc, vec3 cameraRotation) {
    vec3 c = cos(cameraRotation);
    vec3 s = sin(cameraRotation);

    mat4 translateView = mat4(
        1.0, 0.0, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, -1.0, 0.0,
        -1.0 * cameraLoc.x, -1.0 * cameraLoc.y, cameraLoc.z, 1.0
    );

    mat4 rotateViewX = mat4(
        1.0, 0.0, 0.0, 0.0,
        0.0, c.x, s.x, 0.0,
        0.0, -s.x, c.x, 0.0,
        0.0, 0.0, 0.0, 1.0
    );

    mat4 rotateViewY = mat4(
        c.y, 0.0, -s.y, 0.0,
        0.0, 1.0, 0.0, 0.0,
        s.y, 0.0, c.y, 0.0,
        0.0, 0.0, 0.0, 1.0
    );

    mat4 rotateViewZ = mat4(
        c.z, s.z, 0.0, 0.0,
        -s.z, c.z, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0
    );

    return rotateViewX * rotateViewY * rotateViewZ * translateView * pos;
}

vec4 ApplyProjection(vec4 pos, float near, float right, float top, float far) {
    return  mat4(
        near / right, 0.0, 0.0, 0.0,
        0.0, near / top, 0.0, 0.0,
        0.0, 0.0, -1.0 * (far + near) / (far - near), -1.0,
        0.0, 0.0, -2.0 * far * near / (far - near), 0.0
    ) * pos;
}



void main(){
	float near = 1.0;
	float right = 1.0;
	float top = 1.0;
	float far = 250.0;


    // Scale -> rotate -> translate
	vec4 position = vec4(a_position, 1.0);

    vec4 worldspace = TranslateObject(RotateObject(ScaleObject(position, vec4(scale, 1.0)), rotate));

	vec4 cameraspace = MoveCamera(worldspace, camerapos, camerarot);
	
    gl_Position = ApplyProjection(cameraspace, near, right, top, far);
	fragColor = a_color;
}