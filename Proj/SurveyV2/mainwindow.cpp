#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "buildsurvey.h"
#include "runsurvey.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    this->setFixedSize(1280,800);
    ui->stack->setFixedSize(1280,800);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_actionNew_triggered()
{
    bs = new Build(this);
    QWidget* temp = ui->stack->widget(0);
    ui->stack->removeWidget(temp);
    temp = NULL;
    ui->stack->insertWidget(0,bs);
    ui->stack->setCurrentIndex(0);

}
