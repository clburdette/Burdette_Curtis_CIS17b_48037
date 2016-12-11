#ifndef CHECKOUT_H
#define CHECKOUT_H

#include <QDialog>

namespace Ui {
class Checkout;
}

class Checkout : public QDialog
{
    Q_OBJECT

public:
    explicit Checkout(QWidget *parent = 0);
    ~Checkout();

private:
    Ui::Checkout *ui;
};

#endif // CHECKOUT_H
