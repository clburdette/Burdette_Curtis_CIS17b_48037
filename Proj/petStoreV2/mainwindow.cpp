#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "results.h"
#include <QDialog>

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    ui->type->addItem("any");
    ui->type->addItem("bird");
    ui->type->addItem("cat");
    ui->type->addItem("dog");
    ui->type->addItem("turtle");
    ui->size->addItem("any");
    ui->size->addItem("small");
    ui->size->addItem("medium");
    ui->size->addItem("large");
    ui->color->addItem("any");
    ui->color->addItem("white");
    ui->color->addItem("black");
    ui->color->addItem("biege");
    ui->color->addItem("green");
    ui->color->addItem("other");
    Pet *test1 = new Pet("Bob","dog","small","black");
    Pet *test2 = new Pet("Doug","dog","large","biege");
    Pet *test3 = new Pet("Spot","dog","small","white");
    Pet *test4 = new Pet("Rex","dog","large","black");
    Pet *test5 = new Pet("Monkey","cat","medium","biege");
    Pet *test6 = new Pet("George","cat","small","black");
    Pet *test7 = new Pet("Bo","cat","medium","white");
    Pet *test8 = new Pet("Argh","bird","large","green");
    main.push_back(test1);
    main.push_back(test2);
    main.push_back(test3);
    main.push_back(test4);
    main.push_back(test5);
    main.push_back(test6);
    main.push_back(test7);
    main.push_back(test8);


}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_pushButton_clicked()
{
    QString type1 = ui->type->currentText();
    QString size1 = ui->size->currentText();
    QString color1 = ui->color->currentText();

    if(type1 == "any")
    {
        for(int i = 0; i < main.size();i++)
        {
            first.push_back(main[i]);
        }
    }
    else
    {
        for(int i = 0; i < main.size();i++)
        {
            if(type1 == main[i]->type)
            {
                first.push_back(main[i]);
            }
            else
            {

            }
        }
    }

    if(!first.empty())
    {
        if(size1 == "any")
        {
            for(int i = 0;i < first.size();i++)
            {
                second.push_back(first[i]);
            }
        }
        else
        {
            for(int i = 0; i < first.size();i++)
            {
                if(size1 == first[i]->size)
                {
                    second.push_back(first[i]);
                }
                else
                {

                }
            }
        }
    }
    else
    {
        second.clear();
    }

    if(!second.empty())
    {
        if(color1 == "any")
        {
            for(int i = 0;i < second.size();i++)
            {
                third.push_back(second[i]);
            }
        }
        else
        {
            for(int i = 0; i < second.size();i++)
            {
                if(color1 == second[i]->color)
                {
                    third.push_back(second[i]);
                }
                else
                {

                }
            }
        }
    }
    else
    {
        third.clear();
    }
    result = new Results(this);
    connect(this, SIGNAL(sendData(QVector<Pet*>)),result, SLOT(receiveData(QVector<Pet*>)));
    emit sendData(third);
    first.clear();
    second.clear();
    third.clear();
    result->show();
}
