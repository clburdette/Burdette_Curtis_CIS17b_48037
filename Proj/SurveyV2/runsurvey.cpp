#include "runsurvey.h"
#include "ui_runsurvey.h"

runSurvey::runSurvey(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::runSurvey)
{
    ui->setupUi(this);
}

runSurvey::~runSurvey()
{
    delete ui;
}
