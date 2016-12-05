#ifndef PROB3TABLEINHERITED_H
#define PROB3TABLEINHERITED_H

#include "prob3table.h"

class Prob3TableInherited : public Prob3Table
{
protected:
	int* augTable;
public:
	Prob3TableInherited(int row, int col) : Prob3Table(row, col)
	{
		augTable = new int[(rows + 1)*(cols + 1)];

		for (int i = 0; i < rows; i++)
		{
			for (int j = 0; j < cols; j++)
			{
				augTable[(cols + 1)*i + j] = table[cols*i + j];
			}
			augTable[((i + 1)*cols) + i] = rowSum[i];
		}
		for (int i = 0; i < cols; i++)
		{
			augTable[((rows + 1)*cols) + (i-1)] = colSum[i];
		}
		augTable[((rows+ 1)*cols)+rows] = grandTotal;
	}
	~Prob3TableInherited() { delete[]augTable; }
	const int* getAugTable() { return augTable; }
};

#endif // PROB3TABLEINHERITED_H

