#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QMessageBox>
#include <QSize>
#include <build.h>
#include <questionblock.h>
#include <surveyview.h>


namespace Ui {
class MainWindow;
}

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit MainWindow(QWidget *parent = 0);
    ~MainWindow();
    void menuAvail(bool);

signals:
    void shareData(QuestionBlock*[]);

public slots:
    //void recData(QuestionBlock*[]);

private slots:
    void on_actionNew_triggered();

    void on_actionEdit_View_triggered();

    void on_actionSurvey_View_triggered();

private:
    Ui::MainWindow *ui;
    Build *bs;
    SurveyView *sv;
    QuestionBlock *blockMW[20];


};

#endif // MAINWINDOW_H
