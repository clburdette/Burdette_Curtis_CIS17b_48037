#ifndef ADOPT_H
#define ADOPT_H

#include <QDialog>
#include "checkout.h"

namespace Ui {
class Adopt;
}

class Adopt : public QDialog
{
    Q_OBJECT

public:
    explicit Adopt(QWidget *parent = 0);
    ~Adopt();

signals:
    void returnToMain();

private slots:
    void on_pushButton_7_clicked();

    void on_pushButton_6_clicked();

    void on_pushButton_5_clicked();

private:
    Ui::Adopt *ui;
    Checkout *checkout;
};

#endif // ADOPT_H
