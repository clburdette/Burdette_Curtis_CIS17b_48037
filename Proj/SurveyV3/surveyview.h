#ifndef SURVEYVIEW_H
#define SURVEYVIEW_H

#include <QWidget>
#include "questionblock.h"

namespace Ui {
class SurveyView;
}

class SurveyView : public QWidget
{
    Q_OBJECT

public:
    explicit SurveyView(QWidget *parent = 0);
    ~SurveyView();

public slots:
    //void fromEdit(QuestionBlock*[]);

private:
    Ui::SurveyView *ui;
    QuestionBlock *blockSV[20];
};

#endif // SURVEYVIEW_H
