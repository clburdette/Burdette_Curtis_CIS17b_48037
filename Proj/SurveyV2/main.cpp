#include "signin.h"
#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    SignIn w;
    //w.setFixedSize(1280,800);
    w.show();

    return a.exec();
}
