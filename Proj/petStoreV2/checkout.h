#ifndef CHECKOUT_H
#define CHECKOUT_H

#include <QDialog>
#include "regist.h"
#include "pay.h"

namespace Ui {
class Checkout;
}

class Checkout : public QDialog
{
    Q_OBJECT

public:
    explicit Checkout(QWidget *parent = 0);
    ~Checkout();


private slots:
    void on_pushButton_clicked();

    void on_pushButton_2_clicked();

private:
    Ui::Checkout *ui;
    Pay *pay;
    Regist *regist;
};

#endif // CHECKOUT_H
