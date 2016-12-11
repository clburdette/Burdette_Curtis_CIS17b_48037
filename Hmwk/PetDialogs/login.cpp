#include "login.h"
#include "ui_login.h"
#include <QMessageBox>


login::login(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::login)
{
    ui->setupUi(this);
}

login::~login()
{
    delete ui;
}
void login::on_li_clicked()
{
    QString name = ui->un->text();
    QString pass = ui->pass->text();
    if(name == "admin" && pass == "password")
    {
        emit confirmLI();
        close();
    }
    else
    {
        QMessageBox::warning(this, "login", "User name and/or password is incorrect");
    }
}

void login::on_reg_clicked()
{
    reg = new Register(this);
    reg->show();
}
