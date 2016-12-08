#include "petfind.h"
#include <QApplication>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    PetFind *dialog = new PetFind;
    dialog->show();

    return a.exec();
}
