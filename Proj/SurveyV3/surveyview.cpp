#include "surveyview.h"
#include "ui_surveyview.h"

SurveyView::SurveyView(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::SurveyView)
{
    ui->setupUi(this);
}

SurveyView::~SurveyView()
{
    delete ui;
}
