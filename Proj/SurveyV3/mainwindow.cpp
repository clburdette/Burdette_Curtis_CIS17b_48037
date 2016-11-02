#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "build.h"


MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    menuAvail(false);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_actionNew_triggered()
{
    bs = new Build(this);
    sv = new SurveyView(this);
    QWidget* temp = ui->stack->widget(0);
    ui->stack->removeWidget(temp);
    QWidget* temp2 = ui->stack->widget(1);
    ui->stack->removeWidget(temp2);
    temp = NULL;
    temp2 = NULL;
    ui->stack->insertWidget(0,bs);
    ui->stack->insertWidget(1,sv);
    ui->stack->setCurrentIndex(0);
    menuAvail(true);
    //connect(bs, SIGNAL(sendBack(QuestionBlock*[])), this, SLOT(recData(QuestionBlock*[])));
}

void MainWindow::menuAvail(bool x)
{
    ui->actionSave->setEnabled(x);
    ui->actionSave_As->setEnabled(x);
    ui->actionEdit_View->setEnabled(x);
    ui->actionSurvey_View->setEnabled(x);
    ui->actionClose->setEnabled(x);
}

void MainWindow::on_actionEdit_View_triggered()
{
    ui->stack->setCurrentIndex(0);
}

void MainWindow::on_actionSurvey_View_triggered()
{
    ui->stack->setCurrentIndex(1);
}
