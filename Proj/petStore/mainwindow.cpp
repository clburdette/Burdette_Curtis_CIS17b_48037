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
    Pet one("Doug", "dog", "medium", "white");
    Pet two("Stanley", "dog", "small", "black");
    Pet three("George", "cat", "small", "black");
    main.push_back(one);
    main.push_back(two);
    main.push_back(three);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::on_pushButton_clicked()
{
    QString type = ui->type->currentText();
    QString size = ui->size->currentText();
    QString color = ui->color->currentText();
    result = new Results(this);
    result->show();

    /*if(type == "any")
    {
         for(int i = 0; i < main.size() - 1; i++)
         {
             Pet temp = main[i];
             first.push_back(temp);
         }
         result = new Results(this);
         for(int i=0; i < first.size() - 1; i++)
         {
             Pet temp = first[i];
             result->results.push_back(temp);
         }
         result->show();
    }*/
    //Pet temp = first[0];
    //QString temp2 = QString::fromStdString(temp.getName());
    //ui->label_2->setText(temp2);
    /*
    for(int i = 0;i < main.size()-1;i++)
    {
        Pet temp = main[i];

        if(type == "any")
        {
            first.push_back(main[i]);
        }
        //else if(type == QString::fromStdString(temp.getType()));
        //{
        //    first.push_back(main[i]);
        //}
        else
        {
            first.clear();
        }
    }
    if(!first.empty())
    {
        for(int i = 0;i < first.size()-1;i++)
        {
            Pet temp = first[i];

            if(size == "any")
            {
                second.push_back(first[i]);
            }
            //else if(size == QString::fromStdString(temp.getSize()));
            //{
            //    second.push_back(first[i]);
            //}
            else
            {
                second.clear();
            }
        }
    }

    if(!second.empty())
    {
        for(int i = 0;i < second.size()-1;i++)
        {
            Pet temp = second[i];
            if(color == "any")
            {
                third.push_back(second[i]);
            }
            //else if(color == QString::fromStdString(temp.getColor()));
            //{
            //    third.push_back(second[i]);
            //}
            else
            {
                third.clear();
            }
        }
    }
    result = new Results(this);

    if(third.empty())
    {
        result->show();
    }
    else
    {
        result->results = third;
        result->show();
    }*/
}
