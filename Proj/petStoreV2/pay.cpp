#include "pay.h"
#include "ui_pay.h"

Pay::Pay(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Pay)
{
    ui->setupUi(this);
}

Pay::~Pay()
{
    delete ui;
}
