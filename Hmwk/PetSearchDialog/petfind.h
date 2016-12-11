#ifndef PETFIND_H
#define PETFIND_H

#include <QDialog>

namespace Ui {
class PetFind;
}

class PetFind : public QDialog
{
    Q_OBJECT

public:
    explicit PetFind(QWidget *parent = 0);
    ~PetFind();

private:
    Ui::PetFind *ui;
};

#endif // PETFIND_H
