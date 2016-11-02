#include "build.h"
#include "ui_build.h"
#include "questionblock.h"
#include "ui_questionblock.h"

Build::Build(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::Build)
{
    ui->setupUi(this);
    fillHold();
    connect(ui->listWidget, SIGNAL(currentRowChanged(int)),
                ui->stackedWidget, SLOT(setCurrentIndex(int)));
}

Build::~Build()
{
    delete ui;
}

int Build::findFirst()
{
    for(int i = 0; i < SIZE; i++)
    {
        if(hold[i] == false)
        {
            return i;
        }
    }
    return SIZE;
}

void Build::fillHold()
{
    for(int i = 0; i < SIZE; i++)
    {
        hold[i] = false;
    }
}

void Build::on_addQ_clicked()
{
    int addIndex = ui->listWidget->count();
    int index = findFirst();
    QString temp = "Question" + QString::number(addIndex + 1);
    new QListWidgetItem(temp, ui->listWidget);
    hold[index] = true;
    QuestionBlock *tempQB = new QuestionBlock;
    block[index] = tempQB;
    tempQB->setLabelText(QString::number(addIndex));
    ui->stackedWidget->insertWidget(index,tempQB);
}

void Build::on_addQ_2_clicked()
{
    int temp = ui->listWidget->currentRow();
    QListWidgetItem *tempi = ui->listWidget->item(temp);
    delete tempi;
    hold[temp] = false;
    sortQuestions();
    sortBlock();
}

void Build::sortQuestions()
{
    int temp = ui->listWidget->count();
    for(int i = 0;i < temp; i++)
    {
       QListWidgetItem *tempi = ui->listWidget->item(i);
       QString tempQ = "Question" + QString::number(i + 1);
       tempi->setText(tempQ);
    }
}

void Build::sortBlock()
{
    int index = findFirst();
    if(index < SIZE - 1)
    {
        if(hold[index + 1] == true)
        {
            QuestionBlock *tempQB = block[index];
            delete tempQB;
            block[index] = block[index+1];
            hold[index] = true;
            hold[index+1] = false;
            //sortBlock();
        }
        else
        {
            QuestionBlock *tempQB = block[index];
            delete tempQB;
            hold[index] = false;
        }
    }
    else
    {
        QuestionBlock *tempQB = block[index];
        delete tempQB;
        hold[index] = false;
    }
}
