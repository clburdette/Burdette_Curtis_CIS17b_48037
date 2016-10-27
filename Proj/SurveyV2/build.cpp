#include "build.h"
#include "ui_build.h"
#include "questionblock.h"

Build::Build(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::Build)
{
    ui->setupUi(this);
    //this->setFixedSize(700,900);
    hold = new bool[10];
    group = new QuestionBlock*[10];
    total = 0;

    fillBuild();
}

Build::~Build()
{
    delete ui;
    delete hold;
    hold = NULL;
}

void Build::fillBuild()
{
    for (int i = 0;i < 10; i++)
    {
        hold[i] = false;
    }
}

int Build::findFirst()
{
    int number = 10;
    for (int i = 0;i < 10; i++)
    {
        if (hold[i] == false)
        {
            return i;
        }
    }
    return number;
}

void Build::addTo(int q)
{
    QuestionBlock *temp = new QuestionBlock(this);
    switch(q)
    {
        case 0:
            ui->stack0->insertWidget(0,temp);
            ui->stack0->setCurrentIndex(0);
            hold[0] = true;
            total++;
            break;
        case 1:
            ui->stack1->insertWidget(0,temp);
            ui->stack1->setCurrentIndex(0);
            hold[1] = true;
            total++;
            break;
        case 2:
            ui->stack2->insertWidget(0,temp);
            ui->stack2->setCurrentIndex(0);
            hold[2] = true;
            total++;
            break;
        case 3:
            ui->stack3->insertWidget(0,temp);
            ui->stack3->setCurrentIndex(0);
            hold[3] = true;
            total++;
            break;
        case 4:
            ui->stack4->insertWidget(0,temp);
            ui->stack4->setCurrentIndex(0);
            hold[4] = true;
            total++;
            break;
        case 5:
            ui->stack5->insertWidget(0,temp);
            ui->stack5->setCurrentIndex(0);
            hold[5] = true;
            total++;
            break;
        case 6:
            ui->stack6->insertWidget(0,temp);
            ui->stack6->setCurrentIndex(0);
            hold[6] = true;
            total++;
            break;
        case 7:
            ui->stack7->insertWidget(0,temp);
            ui->stack7->setCurrentIndex(0);
            hold[7] = true;
            total++;
            break;
        case 8:
            ui->stack8->insertWidget(0,temp);
            ui->stack8->setCurrentIndex(0);
            hold[8] = true;
            total++;
            break;
        case 9:
            ui->stack9->insertWidget(0,temp);
            ui->stack9->setCurrentIndex(0);
            hold[9] = true;
            total++;
            break;
    }


}

void Build::on_addQ_clicked()
{
    if (total >= 0 && total < 10)
    {
        int temp = findFirst();
        //group[temp] = new QuestionBlock(this);
        addTo(temp);
    }
}
