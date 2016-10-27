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

void Login::on_submit_clicked()
{
    QString username = ui->username->text();
    QString password = ui->username->text();

    if(username == "admin" && password == "password")
    {
        QMessageBox::information(this, "login", "Welcome " + username);
        hide();
        main = new QMainWindow(this);
        main->show();
    }
    else
    {
        QMessageBox::warning(this, "login", "User name and/or password is incorrect");
    }

}
