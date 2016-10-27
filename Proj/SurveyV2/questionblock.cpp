#include "questionblock.h"
#include "ui_questionblock.h"

QuestionBlock::QuestionBlock(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::QuestionBlock)
{
    ui->setupUi(this);
    //this->setFixedSize(300,180);
}

QuestionBlock::~QuestionBlock()
{
    delete ui;
}
