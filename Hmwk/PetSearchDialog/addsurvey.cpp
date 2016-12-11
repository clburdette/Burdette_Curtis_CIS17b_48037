#include "addsurvey.h"
#include "ui_addsurvey.h"

AddSurvey::AddSurvey(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::AddSurvey)
{
    ui->setupUi(this);
}

AddSurvey::~AddSurvey()
{
    delete ui;
}
