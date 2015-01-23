
util = require '../matrix-utilities'

exports.Identity = (test) ->

	actual = new util.Identity()
	expected = [
		[1, 0, 0, 0]
		[0, 1, 0, 0]
		[0, 0, 1, 0]
		[0, 0, 0, 1]
	]

	test.deepEqual actual, expected
	test.done()

exports.add = (test) ->
	one = two = [
		[ 1, 2, 4, 8 ]
		[ 16, 32, 64, 128 ]
	]
	expected = [
		[ 2, 4, 8, 16 ]
		[ 32, 64, 128, 256 ]
	]
	actual = util.add one, two
	test.deepEqual actual, expected

	one = [
		[ 1, 2 ]
		[ 4, 8 ]
		[ 16, 32 ]
		[ 64, 128 ]
	]
	two = [
		[ 2, 3 ]
		[ 5, 7 ]
		[ 11, 13 ]
		[ 17, 19 ]
	]
	expected = [
		[ 3, 5 ]
		[ 9, 15 ]
		[ 27, 45 ]
		[ 81, 147 ]
	]
	actual = util.add one, two
	test.deepEqual actual, expected

	one = [
		[ 1, 2 ]
		[ 3, 4 ]
	]
	two = [
		[ 5, 6 ]
		[ 7, 8 ]
		[ 9, 10 ]
	]
	test.throws ->
		util.add one, two

	one = [
		[ 1, 2 ]
		[ 3, 4 ]
	]
	two = [
		[ 5, 6 ]
		[ 7, 8, 9 ]
	]
	test.throws ->
		util.add one, two

	test.done()

exports.multiply = (test) ->

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

	# multiply 3x3 x 2x3

	actual = util.multiply one, two
	expected = [
		[ 1*1 + 2*3 + 3*5 , 1*2 + 2*4 + 3*6 ]
		[ 4*1 + 5*3 + 6*5 , 4*2 + 5*4 + 6*6 ]
		[ 7*1 + 8*3 + 9*5 , 7*2 + 8*4 + 9*6 ]
	]

	test.deepEqual actual, expected

	# multiply 4x4 x 4x4

	one = [
		[1, 2, 3, 4]
		[5, 6, 7, 8]
		[9, 10, 11, 12]
		[13, 14, 15, 16]
	]

	two = [
		[1, 2, 3, 4]
		[5, 6, 7, 8]
		[9, 10, 11, 12]
		[13, 14, 15, 16]
	]

	actual = util.multiply one, two
	expected = [
		[90, 100, 110, 120]
		[202, 228, 254, 280]
		[314, 356, 398, 440]
		[426, 484, 542, 600]
	]

	test.deepEqual actual, expected

	test.done()

exports.flip = (test) ->

	# 2x2

	matrix = [
		[1, 2]
		[3, 4]
	]

	actual = util.flip matrix
	expected = [
		[1, 3]
		[2, 4]
	]

	test.deepEqual actual, expected

	# 4x4

	matrix = [
		[1, 2, 3, 4]
		[5, 6, 7, 8]
		[9, 10, 11, 12]
		[13, 14, 15, 16]
	]

	actual = util.flip matrix
	expected = [
		[1, 5, 9, 13]
		[2, 6, 10, 14]
		[3, 7, 11, 15]
		[4, 8, 12, 16]
	]

	test.deepEqual actual, expected

	test.done()

exports.to2d = (test) ->

	matrix = [
		[1, 2, 3, 4]
		[5, 6, 7, 8]
		[9, 10, 11, 12]
		[13, 14, 15, 16]
	]

	actual = util.to2d matrix
	expected = [
		[1, 2, 4]
		[5, 6, 8]
	]

	test.deepEqual actual, expected
	test.done()

exports.to3d = (test) ->

	matrix = [
		[1, 2, 3]
		[4, 5, 6]
	]

	actual = util.to3d matrix
	expected = [
		[1, 2, 0, 3]
		[4, 5, 0, 6]
		[0, 0, 1, 0]
		[0, 0, 0, 1]
	]

	test.deepEqual actual, expected
	test.done()
