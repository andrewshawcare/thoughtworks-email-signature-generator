# matrix-utilities

[![Build Status](https://travis-ci.org/eighttrackmind/matrix-utilities.png)](https://travis-ci.org/eighttrackmind/matrix-utilities.png)
[![browser support](https://ci.testling.com/eighttrackmind/matrix-utilities.png)](https://ci.testling.com/eighttrackmind/matrix-utilities)

Tiny (607b gzipped), high performance utilities for performing 2/3D matrix calculations. Full unit test coverage, compatible with Node/CommonJS, AMD, and browser globals.

## API

```coffee
util = require 'matrix-utilities'

util.Identity() # returns new 3D identity matrix
util.add matrix1, matrix2 # returns matrix1 + matrix2
util.multiply matrix1, matrix2 # returns matrix1×matrix2
util.flip matrix # flip a matrix along x=y
util.to2d matrix
util.to3d matrix
```

## examples

```coffee
util = require 'matrix-utilities'

# identity

matrix = util.Identity()
###
	#=>
	[
		[1, 0, 0, 0]
		[0, 1, 0, 0]
		[0, 0, 1, 0]
		[0, 0, 0, 1]
	]
###

# to2d

util.to2d matrix
###
	#=>
	[
		[1, 0, 0]
		[0, 1, 0]
	]
###

# flip

util.flip [
	[1, 2, 3]
	[4, 5, 6]
	[7, 8, 9]
]
###
	#=>
	[
		[1, 4, 7]
		[2, 5, 8]
		[3, 6, 9]
	]
###

# add

one = [
	[2, 4]
	[6, 8]
]

two = [
	[1, 3]
	[5, 7]
]

util.add one, two
###
	#=>
	[
		[3, 7]
		[11, 15]
	]
###

# multiply

one = [
	[1, 2, 3]
	[4, 5, 6]
	[7, 8, 9]
]

two = [
	[1, 2]
	[3, 4]
	[5, 6]
]

util.multiply one, two
###
	#=>
	[
		[22, 28]
		[49, 64]
		[76, 100]
	]
###
```
