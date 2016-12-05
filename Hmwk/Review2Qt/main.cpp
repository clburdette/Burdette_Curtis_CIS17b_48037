#include <QtWidgets>
#include <QApplication>
#include <QLabel>
#include <QString>
#include "prob3tableinherited.h"

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);
    QString data("");
        int rows = 5;
        int cols = 6;
        Prob3TableInherited tab(rows, cols);
        const int *naugT = tab.getTable();
        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                data += QString::number(naugT[i*cols + j]);
                data += " ";
            }
            data += "<br/>";
        }
        data += "<br/>";
        const int *augT = tab.getAugTable();
        for (int i = 0; i <= rows; i++)
        {
            for (int j = 0; j <= cols; j++)
            {
                data += QString::number(augT[i * (cols+1) + j]);
                data += " ";
            }
            data += "<br/>";
        }
        QLabel *label = new QLabel(data);
        label->show();

    return app.exec();
}
