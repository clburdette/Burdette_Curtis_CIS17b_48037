/********************************************************************************
** Form generated from reading UI file 'runsurvey.ui'
**
** Created by: Qt User Interface Compiler version 5.7.0
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_RUNSURVEY_H
#define UI_RUNSURVEY_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QDialog>
#include <QtWidgets/QHeaderView>

QT_BEGIN_NAMESPACE

class Ui_runSurvey
{
public:

    void setupUi(QDialog *runSurvey)
    {
        if (runSurvey->objectName().isEmpty())
            runSurvey->setObjectName(QStringLiteral("runSurvey"));
        runSurvey->resize(1273, 821);

        retranslateUi(runSurvey);

        QMetaObject::connectSlotsByName(runSurvey);
    } // setupUi

    void retranslateUi(QDialog *runSurvey)
    {
        runSurvey->setWindowTitle(QApplication::translate("runSurvey", "Dialog", 0));
    } // retranslateUi

};

namespace Ui {
    class runSurvey: public Ui_runSurvey {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_RUNSURVEY_H
