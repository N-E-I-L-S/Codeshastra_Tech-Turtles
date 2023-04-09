import numpy as np
from plyfile import PlyData, PlyElement

# Load the PLY file
plydata = PlyData.read('output.ply')

# Extract the vertex data
vertex_data = plydata['vertex'].data
x = vertex_data['x']
y = vertex_data['y']
z = vertex_data['z']

# Extract the face data
face_data = plydata['face'].data
vertices = face_data['vertex_indices']

# Display the data
print("Vertices:")
print(np.column_stack((x, y, z)))
print("Faces:")
print(vertices)
