#ifndef PROB3TABLE_H
#define PROB3TABLE_H

#include <fstream>
#include <iostream>
#include <cstdlib>
using namespace std;


class Prob3Table
{
protected:
    int rows;
    int cols;
    int* rowSum;
    int* colSum;
    int* table;
    int grandTotal;
    void calcTotal();
public:
    Prob3Table(int, int);
    ~Prob3Table()
    {
        delete[]table;
        delete[]rowSum;
        delete[]colSum;
    }
    const int* getTable() { return table; }
    const int* getRowSum() { return rowSum; }
    const int* getColSum() { return colSum; }
    int getGrandTotal() { return grandTotal; }
};

#endif // PROB3TABLE_H

