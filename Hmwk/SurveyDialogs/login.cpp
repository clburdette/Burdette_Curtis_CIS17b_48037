#include "login.h"
#include "ui_login.h"

#include <QMessageBox>

Login::Login(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Login)
{
    ui->setupUi(this);
}

Login::~Login()
{
    delete ui;
}

void Login::on_li_clicked()
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

void Login::on_reg_clicked()
{
    reg = new Register(this);
    reg->show();
}
