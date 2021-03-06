#include "prob3tableinherited.h"

int main()
{
	int rows = 5;
	int cols = 6;
	Prob3TableInherited tab(rows, cols);
	const int *naugT = tab.getTable();
	for (int i = 0; i < rows; i++)
	{
		for (int j = 0; j < cols; j++)
		{
			cout << naugT[i*cols + j] << " ";
		}
		cout << endl;
	}
	cout << endl;
	const int *augT = tab.getAugTable();
	for (int i = 0; i <= rows; i++)
	{
		for (int j = 0; j <= cols; j++)
		{
			cout << augT[i * (cols+1) + j] << " ";
		}
		cout << endl;
	}

	return 0;
}