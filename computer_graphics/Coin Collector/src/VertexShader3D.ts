export default  `        
         
// 4x4 Matrix mapped to a 1D array of 16
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

vec3 cosA = cos(rotate);
vec3 sinA = sin(rotate);

vec4 PositionObject(vec4 pos){
	// 4x4 Translate Function
	// 1 0 0 X
	// 0 1 0 Y
	// 0 0 1 Z
	// 0 0 0 1

	mat4 translateM = mat4(
		1.0,      	0.0,       	0.0,    	0.0,
		0.0,     	1.0,       	0.0,      	0.0,
		0.0, 		0.0,      	1.0,       	0.0,
		trans.x, 	trans.y, 	trans.z, 	1.0
	);
	return translateM * pos;
}

vec4 ScaleObject(vec4 pos){
	if (length(scale) == 0.0) 
		return pos;

	// 4x4 Scale Function
	// X 0 0 0
	// 0 Y 0 0
	// 0 0 Z 0
	// 0 0 0 1

	mat4 scaleM = mat4(
		scale.x, 	0.0,       	0.0,       	0.0,
		0.0,       	scale.y, 	0.0,       	0.0,
		0.0,       	0.0,       	scale.z, 	0.0,
		0.0,       	0.0,       	0.0,       	1.0
	);
	return scaleM * pos;
}

vec4 RotateXObject(vec4 pos){
	// 4x4 Rotate X Function
	// 1 0       0      0
	// 0 cos(A) -sin(A) 0
	// 0 sin(A)  cos(A) 0
	// 0 0       0      1

	mat4 rotateX = mat4(
		1.0, 0.0,      0.0, 0.0,
		0.0, cosA.x,      sinA.x, 0.0,
		0.0, -sinA.x,     cosA.x, 0.0,
		0.0, 0.0,      0.0, 1.0
	);
	return rotateX * pos;
}

vec4 RotateYObject(vec4 pos){
	// 4x4 Rotate Y Function
	// cos(A) 0 sin(A) 0
	// 0      1 0      0
	//-sin(A) 0 cos(A) 0
	// 0      0 0      1

	mat4 rotateY = mat4(
		cosA.y, 0.0, -sinA.y, 0.0,
		0.0, 1.0, 0.0,  0.0,
		sinA.y, 0.0, cosA.y,  0.0,
		0.0, 0.0, 0.0,  1.0
	);
	return rotateY * pos;
}

vec4 RotateZObject(vec4 pos){
	// 4x4 Rotate Z Function same as 2x2 matrix rotation
	// cos(A) -sin(A) 0 0
	// sin(A)  cos(A) 0 0
	// 0       0      1 0
	// 0       0      0 1

	mat4 rotateZ = mat4(
		cosA.z,  sinA.z, 0.0, 0.0,
		-sinA.z, cosA.z, 0.0, 0.0,
		0.0,  0.0, 1.0, 0.0,
		0.0,  0.0, 0.0, 1.0
	);

	return rotateZ * pos;
}

void main(){
	// Translate -> rotate -> scale
	gl_Position = PositionObject(
					RotateXObject(
						RotateYObject(
							RotateZObject(
								ScaleObject(vec4(a_position, 1.0)
								)))));
	fragColor = a_color;
}
         `