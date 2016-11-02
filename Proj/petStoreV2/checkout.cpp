#include "checkout.h"
#include "ui_checkout.h"
#include <QMessageBox>

Checkout::Checkout(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Checkout)
{
    ui->setupUi(this);
}

Checkout::~Checkout()
{
    delete ui;
}

void Checkout::on_pushButton_clicked()
{
    if(ui->username->text() == "admin" && ui->password->text() == "password")
    {
        pay = new Pay(this);
        pay->show();
    }
    else
    {
        QMessageBox::warning(this,"username/password error", "The user name and/or password are incorrect.");
    }
}

void Checkout::on_pushButton_2_clicked()
{
    regist = new Regist(this);
    regist->show();
}
