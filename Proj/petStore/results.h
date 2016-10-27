#ifndef RESULTS_H
#define RESULTS_H

#include <QDialog>
#include "pet.h"

namespace Ui {
class Results;
}

class Results : public QDialog
{
    Q_OBJECT

public:
    explicit Results(QWidget *parent = 0);
    ~Results();
    std::vector<Pet>results;
    Pet one;

private:
    Ui::Results *ui;

};

#endif // RESULTS_H
