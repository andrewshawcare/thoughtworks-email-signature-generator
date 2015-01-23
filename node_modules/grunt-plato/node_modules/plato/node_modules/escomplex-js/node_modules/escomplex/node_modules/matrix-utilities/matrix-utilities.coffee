matrixutilities = do ->

	util =

		add: (one, two) ->

			if one.length isnt two.length
				throw new Error 'Matrix y dimensions do not match'

			result = []

			for row, i in one
				
				if row.length isnt two[i].length
					throw new Error "Matrix x dimensions do not match on row #{i + 1}"

				result[i] = []

				for value, j in row
					result[i][j] = value + two[i][j]

			result

		multiply: (one, two) ->

			if one[0].length isnt two.length
				throw new Error 'Matrix 1\'s row count should equal matrix 2\'s column count'

			size = one[0].length
			result = []

			for row, j in two
				result[j] = []
				for value, k in row
					l = size
					sum = 0
					sum += one[j][l] * two[l][k] while l--
					result[j][k] = sum

			result

		flip: (matrix) ->

			result = []

			for row, j in matrix
				for value, k in row
					(result[k] or result[k] = [])[j] = value

			result

		to2d: (matrix) ->

			[
				[matrix[0][0] or 1, matrix[0][1] or 0, matrix[0][3] or 0]
				[matrix[1][0] or 0, matrix[1][1] or 1, matrix[1][3] or 0]
			]

		to3d: (matrix) ->

			[
				[matrix[0][0] or 1, matrix[0][1] or 0, 0, matrix[0][2] or 0]
				[matrix[1][0] or 0, matrix[1][1] or 1, 0, matrix[1][2] or 0]
				[0, 0, 1, 0]
				[0, 0, 0, 1]
			]

		Identity: ->

			[
				[1, 0, 0, 0]
				[0, 1, 0, 0]
				[0, 0, 1, 0]
				[0, 0, 0, 1]
			]
