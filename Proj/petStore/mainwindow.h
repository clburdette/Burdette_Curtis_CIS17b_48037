#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <vector>
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

private slots:
    void on_pushButton_clicked();

private:
    Ui::MainWindow *ui;
    std::vector<Pet>main;
    std::vector<Pet>first;
    std::vector<Pet>second;
    std::vector<Pet>third;
    Results *result;
};

#endif // MAINWINDOW_H
