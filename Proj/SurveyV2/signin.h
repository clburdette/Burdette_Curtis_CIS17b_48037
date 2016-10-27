#ifndef SIGNIN_H
#define SIGNIN_H

#include <QMainWindow>
#include "mainwindow.h"

namespace Ui {
class SignIn;
}

class SignIn : public QMainWindow
{
    Q_OBJECT

public:
    explicit SignIn(QWidget *parent = 0);
    ~SignIn();

private slots:
    void on_pushButton_clicked();

private:
    Ui::SignIn *ui;
    MainWindow *main;
};

#endif // SIGNIN_H
