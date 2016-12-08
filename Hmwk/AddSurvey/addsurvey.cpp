#include "addsurvey.h"
#include "ui_addsurvey.h"

addsurvey::addsurvey(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::addsurvey)
{
    ui->setupUi(this);
}

addsurvey::~addsurvey()
{
    delete ui;
}
