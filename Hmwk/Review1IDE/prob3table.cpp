#include "prob3table.h"

Prob3Table::Prob3Table(int row, int col)
{
	rows = row;
	cols = col;

	table = new int[row * col];

	for (int i = 0; i < ((row * col) - 1); i++)
	{
		table[i] = i + 100;
	}

	table[((row*col) - 1)] = 128;

	rowSum = new int[row];

	for (int i = 0; i < row; i++)
	{
		int rowSumTemp = 0;

		for (int j = 0; j < col; j++)
		{
			rowSumTemp += table[col * i + j];
		}
		rowSum[i] = rowSumTemp;
	}

	colSum = new int[col];

	for (int i = 0; i < col; i++)
	{
		int colSumTemp = 0;

		for (int j = 0; j < row; j++)
		{
			colSumTemp += table[col * j + i];
		}
		colSum[i] = colSumTemp;
	}

	calcTotal();
}
void Prob3Table::calcTotal()
{
	int grandTemp = 0;

	for (int i = 0; i < cols; i++)
	{
		grandTemp += colSum[i];
	}

	grandTotal = grandTemp;
}

