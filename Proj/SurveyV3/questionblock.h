#ifndef QUESTIONBLOCK_H
#define QUESTIONBLOCK_H

#include <QWidget>

namespace Ui {
class QuestionBlock;
}

class QuestionBlock : public QWidget
{
    Q_OBJECT

public:
    explicit QuestionBlock(QWidget *parent = 0);
    ~QuestionBlock();
    void setLabelText(QString);

private:
    Ui::QuestionBlock *ui;
};

#endif // QUESTIONBLOCK_H
