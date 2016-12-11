#ifndef LOGIN_H
#define LOGIN_H

#include "register.h"
#include <QDialog>

namespace Ui {
class login;
}

class login : public QDialog
{
    Q_OBJECT

public:
    explicit login(QWidget *parent = 0);
    ~login();

signals:
    void confirmLI();

private slots:
    void on_li_clicked();

    void on_reg_clicked();

private:
    Ui::login *ui;
    Register *reg;
};

#endif // LOGIN_H
