#ifndef RESULTS_H
#define RESULTS_H

#include <QDialog>
#include <QVector>
#include "pet.h"
#include "adopt.h"

namespace Ui {
class Results;
}

class Results : public QDialog
{
    Q_OBJECT

public:
    explicit Results(QWidget *parent = 0);
    ~Results();
    QVector<Pet*> test2;
    int index;

public slots:
    void receiveData(QVector<Pet*>);
    void backToMain();

private slots:
    void on_pushButton_3_clicked();

    void on_pushButton_2_clicked();

    void on_pushButton_4_clicked();

private:
    Ui::Results *ui;
    Adopt *adopt;

};

#endif // RESULTS_H
