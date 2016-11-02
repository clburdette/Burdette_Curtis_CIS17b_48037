#include "adopt.h"
#include "ui_adopt.h"

Adopt::Adopt(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Adopt)
{
    ui->setupUi(this);
}

Adopt::~Adopt()
{
    delete ui;
}

void Adopt::on_pushButton_7_clicked()
{
    close();
}

void Adopt::on_pushButton_6_clicked()
{
    emit returnToMain();
    close();
}

void Adopt::on_pushButton_5_clicked()
{
    checkout = new Checkout(this);
    checkout->show();
}
