#include "signin.h"
#include "ui_signin.h"
#include "mainwindow.h"
#include <QMessageBox>

SignIn::SignIn(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::SignIn)
{
    ui->setupUi(this);
}

SignIn::~SignIn()
{
    delete ui;
}

void SignIn::on_pushButton_clicked()
{
    QString username = ui->username->text();
    QString password = ui->password->text();

    if(username == "admin" && password == "password")
    {
        QMessageBox::information(this, "login", "Welcome " + username);
        hide();
        main = new MainWindow(this);
        main->show();
    }
    else
    {
        QMessageBox::warning(this, "login", "User name and/or password is incorrect");
    }

}
