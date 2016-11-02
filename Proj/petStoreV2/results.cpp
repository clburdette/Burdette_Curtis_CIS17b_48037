#include "results.h"
#include "ui_results.h"

Results::Results(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Results)
{
    ui->setupUi(this);
}

Results::~Results()
{
    delete ui;
}

void Results::receiveData(QVector<Pet*> atest)
{
    test2 = atest;
    index = 0;
    ui->lName->setText(test2[0]->name);
    ui->lType->setText(test2[0]->type);
    ui->lSize->setText(test2[0]->size);
    ui->lColor->setText(test2[0]->color);
}


void Results::on_pushButton_3_clicked()
{
    close();
}

void Results::on_pushButton_2_clicked()
{
    index++;
    ui->lName->setText(test2[index]->name);
    ui->lType->setText(test2[index]->type);
    ui->lSize->setText(test2[index]->size);
    ui->lColor->setText(test2[index]->color);
}

void Results::on_pushButton_4_clicked()
{
    adopt = new Adopt(this);
    connect(adopt, SIGNAL(returnToMain()),this, SLOT(backToMain()));
    adopt->show();
}

void Results::backToMain()
{
    this->show();
    close();
}
