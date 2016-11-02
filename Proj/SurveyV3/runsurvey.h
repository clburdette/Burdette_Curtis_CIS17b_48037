#ifndef RUNSURVEY_H
#define RUNSURVEY_H

#include <QDialog>

namespace Ui {
class runSurvey;
}

class runSurvey : public QDialog
{
    Q_OBJECT

public:
    explicit runSurvey(QWidget *parent = 0);
    ~runSurvey();

private:
    Ui::runSurvey *ui;
};

#endif // RUNSURVEY_H
