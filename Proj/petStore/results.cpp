#include "results.h"
#include "ui_results.h"

Results::Results(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Results)
{
    ui->setupUi(this);
    Pet one("Stanley", "dog", "small", "black");
    ui->lName->setText(QString::fromStdString(one.getName()));
    ui->lType->setText(QString::fromStdString(one.getType()));
    ui->lSize->setText(QString::fromStdString(one.getSize()));
    ui->lColor->setText(QString::fromStdString(one.getColor()));
}

Results::~Results()
{
    delete ui;
}
