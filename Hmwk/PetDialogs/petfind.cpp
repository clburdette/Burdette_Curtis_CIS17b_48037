#include "petfind.h"
#include "ui_petfind.h"

PetFind::PetFind(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::PetFind)
{
    ui->setupUi(this);
    ui->type->addItem("any");
    ui->type->addItem("bird");
    ui->type->addItem("cat");
    ui->type->addItem("dog");
    ui->type->addItem("turtle");
    ui->size->addItem("any");
    ui->size->addItem("small");
    ui->size->addItem("medium");
    ui->size->addItem("large");
    ui->color->addItem("any");
    ui->color->addItem("white");
    ui->color->addItem("black");
    ui->color->addItem("biege");
    ui->color->addItem("green");
    ui->color->addItem("other");
}

PetFind::~PetFind()
{
    delete ui;
}

void PetFind::on_pushButton_clicked()
{
    QString t = ui->type->currentText();
    QString s = ui->size->currentText();
    QString c = ui->color->currentText();
    emit sendData(t,s,c);
}
