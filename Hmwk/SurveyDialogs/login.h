#ifndef LOGIN_H
#define LOGIN_H

#include "register.h"
#include <QDialog>

namespace Ui {
class Login;
}

class Login : public QDialog
{
    Q_OBJECT

public:
    explicit Login(QWidget *parent = 0);
    ~Login();

signals:
    void confirmLI();

private slots:
    void on_li_clicked();

    void on_reg_clicked();

private:
    Ui::Login *ui;
    Register *reg;
};

#endif // LOGIN_H
