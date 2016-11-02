#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QVector>
#include "pet.h"
#include "results.h"

namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();
    QVector<Pet*>main;
    QVector<Pet*>cart;


signals:
    void sendData(QVector<Pet*>);

private slots:
    void on_pushButton_clicked();

private:
    Ui::MainWindow *ui;
    QVector<Pet*>first;
    QVector<Pet*>second;
    QVector<Pet*>third;
    Results *result;
};

#endif // MAINWINDOW_H
