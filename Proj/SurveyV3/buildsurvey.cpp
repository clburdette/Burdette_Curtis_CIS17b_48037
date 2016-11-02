#include "buildsurvey.h"
#include "ui_buildsurvey.h"

buildSurvey::buildSurvey(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::buildSurvey)
{
    ui->setupUi(this);
}

buildSurvey::~buildSurvey()
{
    delete ui;
}

void buildSurvey::on_checkBox_clicked(bool checked)
{

}
