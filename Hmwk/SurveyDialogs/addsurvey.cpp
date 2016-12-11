#include "addsurvey.h"
#include "ui_addsurvey.h"

#include <QMessageBox>

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
void addsurvey::on_b_clicked()
{
    close();
}

void addsurvey::on_a_clicked()
{
    QString q = ui->question->toPlainText();
    QString one = ui->choice1->text();
    QString two = ui->choice2->text();
    QString three = ui->choice3->text();
    QString four = ui->choice4->text();
    int check = 0;
    if (one != "")
    {
        check++;
    }
    if (two != "")
    {
        check++;
    }
    if (three != "")
    {
        check++;
    }
    if (four != "")
    {
        check++;
    }
    if(q == "Question Text" || q == "")
    {
        QMessageBox::warning(this, "incomplete", "Please enter a question");
    }
    else if(check < 2)
    {
        QMessageBox::warning(this, "incomplete", "Question must have at least 2 response choices");
    }
    else
    {
        emit sendNewQ(q,one,two,three,four);
        close();
    }
}
