#include "addsurvey.h"
#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    addsurvey *w = new addsurvey;
    w->show();

    return a.exec();
}
